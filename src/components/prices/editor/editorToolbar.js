import { Autocomplete, TextField, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';

const PricesEditorToolbar = (pricesList) => {
    return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        backgroundColor: 'secondary.main',
        p: 1,
        borderRadius: 1,
        justifyContent: "space-between"
      }}>
      <Autocomplete
        sx={{
          width: 300,
          backgroundColor: "whitesmoke",
          borderRadius: 1
        }}
        id="item-search"
        freeSolo
        options={pricesList.pricesList.pricesList ? pricesList.pricesList.pricesList.items.map((option) => option.id ? option.id : option.name) : []}
        renderInput={(params) => <TextField {...params} label="Item Search" />}
      />
      <Box sx={{
        pr: 3,
        mt: 1
      }}>
        <IconButton aria-label="Add new item">
          <AddIcon />
        </IconButton>
        <IconButton aria-label="Save JSON">
          <SaveIcon />
        </IconButton>
      </Box>
    </Box>
    );
  };

export default PricesEditorToolbar;