import React from 'react';

import { AppBar, Tabs, Tab, Container, Paper, Typography,makeStyles } from '@material-ui/core';

//Components
import {TabPanel, a11yProps} from './Components/tabPanel';
import RadioButtonsGroup from './Components/radioButtons';
import TableComponent from './Components/table';
import SimpleCard from './Components/card';
import ContainedButtons from './Components/buttons';
import BasicTextFields  from './Components/textField';
import SimpleSelect from './Components/selectBox';
import SpacingGrid from './Components/grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));


function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>

     <Container maxWidth="m">
         <Typography variant="h3">Spectrum Reach MUI Theme</Typography>
      </Container>
      <Container maxWidth="m">
        <Paper>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Table" {...a11yProps(0)} />
          <Tab label="Radio Buttons" {...a11yProps(1)} />
          <Tab label="Buttons" {...a11yProps(2)} />
          <Tab label="Text Fields" {...a11yProps(3)} />
          <Tab label="Dropdown" {...a11yProps(4)} />
          <Tab label="Card" {...a11yProps(5)} />
          <Tab label="Grid" {...a11yProps(6)}/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <TableComponent />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <RadioButtonsGroup />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ContainedButtons />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <BasicTextFields />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <SimpleSelect />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <SimpleCard />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <SpacingGrid />
      </TabPanel>
      </Paper>
      </Container>
    </div>
  );
}

export default App;
