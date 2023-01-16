import { Box } from "@mui/system";
import PricesEditorToolbar from "./editorToolbar";
import PricesEditorList from "./pricesList";

const PricesEditor = () => {
    return (
    <Box>
        <PricesEditorToolbar />
        <PricesEditorList />
    </Box>
    );
  };

export default PricesEditor;