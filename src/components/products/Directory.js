import React from "react";
import { Grid } from '@mui/material';
import { useRecoilValue } from "recoil";
import { directoryAtom } from "../../store/directory";
import MenuItem from "./Menu-item";

const section2 = [
    { title: 'womens', url: 'https://i.ibb.co/GCCdy8t/womens.png', id: 4 },
    { title: 'mens', url: 'https://i.ibb.co/R70vBrQ/mens.png', id: 5 },
]

const Directory = () => {
    const section = useRecoilValue(directoryAtom)
    return (
        <>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 2, sm: 3, md: 4, xl: 8 }} className="mb-5 no-gutters">
            {section && section.length > 0 && section.map(v => {
                return <MenuItem title={v.title} url={v.url} key={v.id} md={4} height={'250px'} />
            })}
        </Grid>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 2, sm: 3, md: 4, xl: 8 }} className="mb-5 no-gutters">
            {section2 && section2.length > 0 && section2.map(v => {
                return <MenuItem title={v.title} url={v.url} key={v.id} md={6} height={'350px'} />
            })}
        </Grid>
        </>
    )
}

export default Directory