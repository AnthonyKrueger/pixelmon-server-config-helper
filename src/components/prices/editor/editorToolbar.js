import { Autocomplete, TextField, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';

const itemList = ["item1", "item2"]

const PricesEditorToolbar = () => {
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
        options={itemList.map((option) => option)}
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