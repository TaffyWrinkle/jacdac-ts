import { Client } from "./client";
import { ConsolePriority } from "./constants";
import { Device, Bus } from "./device";
import { Packet } from "./packet";

const enum ConsoleReg {
    MinPriority = 0x80
}

const enum ConsoleCommand {
    MessageDbg = 0x80,
    SetMinPriority = 0x2000 | ConsoleReg.MinPriority,
}

const LOGGER_SERVICE_CLASS = 0x12dc1fca;

export interface PacketEventEmitter {
    /**
     * Event emitted when a log entry is received
     * @param event 
     * @param listener 
     */
    on(event: 'log', listener: (priority: number, msg: string) => void): boolean;
}

export class ConsoleClient extends Client {
    minPriority = ConsolePriority.Silent; // drop all packets by default

    constructor(bus: Bus) {
        super(bus, "conc", LOGGER_SERVICE_CLASS, null);
        this.bus.on("announce", ev => {
            // on every announce, if we're listening to anything, tell
            // everyone to log
            if (this.minPriority < ConsolePriority.Silent)
                Packet.packed(ConsoleCommand.SetMinPriority, "i", [this.minPriority])
                    .sendAsMultiCommandAsync(this.serviceClass)
        })
    }

    handlePacket(packet: Packet) {
        let pri = packet.service_command - ConsoleCommand.MessageDbg
        if (0 <= pri && pri <= ConsolePriority.Silent) {
            if (pri < this.minPriority)
                return;

            // send message to console
            const deviceName = this.device.toString();
            const innerMsg = packet.data.toString()
            // the initial ':' is used as marker to avoid infinite console repeat
            const msg = `:${deviceName}> ${innerMsg}`;
            switch (pri) {
                case ConsolePriority.Debug: console.debug(msg); break;
                case ConsolePriority.Log: console.log(msg); break;
                case ConsolePriority.Warning: console.warn(msg); break;
                case ConsolePriority.Error: console.error(msg); break;
            }
            this.emit('log', { priority: pri, message: packet.data.toString() })
        }
    }

}