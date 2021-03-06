
import React, { useContext } from 'react';
import { ListItem, ListItemText, Grid } from '@material-ui/core';
import DeviceCard from './DeviceCard';
import useChange from '../jacdac/useChange';
import { BusState } from '../../../src/dom/bus';
import JacdacContext from '../../../src/react/Context';

const DeviceList = (props: { serviceClass?: number }) => {
    const { bus, connectionState } = useContext(JacdacContext)
    const devices = useChange(bus, n => n.devices({ serviceClass: props.serviceClass }))

    return (
        <Grid
            container
            spacing={2}
        >
            {devices.map(device => <Grid item xs={4}><DeviceCard device={device} /></Grid>)}
        </Grid>
    )

}

export default DeviceList