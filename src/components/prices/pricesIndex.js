import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import NewConfigButton from './newConfigButton';
import ImportConfigButton from './importConfigButton';
import PricesEditor from './editor/pricesEditor';

const fs = window.require('fs')
const pathModule = window.require('path')

const { app } = window.require("@electron/remote")

const itemList = [
  {
    "name": "pixelmon:poke_ball",
    "buy": 200,
    "sell": 50
  },
  {
    "name": "pixelmon:great_ball",
    "buy": 600,
    "sell": 150
  },
]

function verifyShopItems() {
  console.log("Hi")
}

function PricesIndex() {

    const [path, setPath] = React.useState(app.getAppPath())

    const [fileLoaded, setLoaded] = React.useState(false)

    const [pricesList, setPricesList] = React.useState(null)

    React.useEffect(() => {

      if(pricesList == null) {
        const files = fs.readdirSync(path)
    
        if(!files.includes("price_config")) {
          fs.mkdir((path + "/price_config"), { recursive: true }, (err) => {
            if (err) throw err;
          })
        }
        else if((fs.readdirSync(path + "/price_config")).includes("shopitems.json")) {
          fs.readFile((path + "/price_config/shopitems.json"), 'utf8', function (err, data) {
            if (err) 
               console.log("Error reading JSON")
            setPricesList(JSON.parse(data));
        });
          setLoaded(true);
        }
      }
  
    })

    return (
      <Box>
        <Typography variant="h4" gutterBottom>Prices Editor</Typography>
        {fileLoaded ? 
          <PricesEditor pricesList={pricesList}/> : 
          <Box>
            <NewConfigButton />
            <ImportConfigButton />
          </Box>}
      </Box>
    )
  };

export default PricesIndex;