import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

const PricesEditorListing = (priceObject) => {
    return (
    <Box sx={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "98%",
      borderRadius: 1,
      p: 2,
      backgroundColor: "secondary.main",
      m: 0.75
    }}>
      <Typography variant="h6">{priceObject.priceObject.id || priceObject.priceObject.name}</Typography>
      <Box sx={{
        display: "flex",
        flexDirection: "row",
      }}>
        <Box sx={{
        display: "flex",
        flexDirection: "row",
      }}>
            <TextField
            sx={{
              width: "75%",
            }}
            id={"buyPrice" + (priceObject.priceObject.id || priceObject.priceObject.name)}
            label="Buy price"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            defaultValue={priceObject.priceObject.buy ? priceObject.priceObject.buy : 0}
          />
        </Box>
        <Box sx={{
        display: "flex",
        flexDirection: "row",
      }}>
          <TextField
            sx={{
              width: "75%"
            }}
            id={"sellPrice" + (priceObject.priceObject.id || priceObject.priceObject.name)}
            label="Sell price"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            defaultValue={priceObject.priceObject.sell ? priceObject.priceObject.sell : 0}
          />
        </Box>
      </Box>
    </Box>
    );
  };

export default PricesEditorListing;