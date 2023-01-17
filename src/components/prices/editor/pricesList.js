import { CircularProgress, LinearProgress } from "@mui/material";
import { Box } from "@mui/system";
import PricesEditorListing from "./priceListing";

const PricesEditorList = (pricesList) => {

  function ItemList(items) {
    return(
    <Box sx={{
      width: "100%",
      display: 'flex',
      justifyContent: "center",
      flexDirection: "column"
    }}>
      {
        items.items.map(item => {
          return(<PricesEditorListing priceObject={item} key={item.id || item.name}/>)
    })}
    </Box>
    )
  }

    return (
    <Box sx={{
      width: "100%",
      borderRadius: 1,
      p: 1,
      backgroundColor: "lightgray"
    }}>
        {pricesList.pricesList.pricesList
        ? <ItemList items={pricesList.pricesList.pricesList.items}/>
        : <LinearProgress color="secondary"/>}
    </Box>
    );
  };

export default PricesEditorList;