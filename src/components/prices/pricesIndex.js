import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import NewConfigButton from './newConfigButton';
import ImportConfigButton from './importConfigButton';
import PricesEditor from './editor/pricesEditor';

const fs = window.require('fs')
const pathModule = window.require('path')

const { app } = window.require("@electron/remote")

function PricesIndex() {

    const [path, setPath] = React.useState(app.getAppPath())

    const [fileLoaded, setLoaded] = React.useState(false)

    React.useEffect(() => {
  
      const files = fs.readdirSync(path)
  
      if(!files.includes("price_config")) {
        fs.mkdir((path + "/price_config"), { recursive: true }, (err) => {
          if (err) throw err;
        })
      }
      else if((fs.readdirSync(path + "/price_config")).includes("shopitems.json")) {
        setLoaded(true);
      }
    })

    return (
      <Box>
        <Typography variant="h4" gutterBottom>Prices Editor</Typography>
        {fileLoaded ? 
          <PricesEditor /> : 
          <Box>
            <NewConfigButton />
            <ImportConfigButton />
          </Box>}
      </Box>
    )
  };

export default PricesIndex;