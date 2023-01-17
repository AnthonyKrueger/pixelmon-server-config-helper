import { Box } from "@mui/system";
import PricesEditorToolbar from "./editorToolbar";
import PricesEditorList from "./pricesList";

const list = [1, 2, 3, 4]

const PricesEditor = (pricesList) => {
    return (
    <Box sx={{
      
    }}>
        <PricesEditorToolbar pricesList={pricesList}/>
        <PricesEditorList pricesList={pricesList} />
    </Box>
    );
  };

export default PricesEditor;