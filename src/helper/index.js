import useDataFetching from "../hooks/useDataFetching";
import { defaultPropsType, interFace } from "./index.interface";

const CommonFetchData = ({
    renderLoading = () => {},
    renderFailed = () => {},
    renderSuccess = () => {},
    renderBeforeReady = () => {},
    service = {
        serviceFunction: () => {},
        serviceClear: () => {},
        params: false,
        slug: false,
        data: false,
        isReady: false,
        group: "",
        key: "",
    },
}) => {
    const {
        isReady,
        errorResponse,
        isLoading,
        resultsResponse,
        messageResponse,
    } = useDataFetching(service);

    let render;
    if (isReady) {
        if (isLoading) {
            render = renderLoading();
        } else {
            if (errorResponse) {
                render = renderFailed(messageResponse);
            }
            if (renderSuccess) {
                render = renderSuccess(resultsResponse);
            }
        }
    } else {
        render = renderBeforeReady();
    }

    return render;
};

CommonFetchData.defaultProps = defaultPropsType;
CommonFetchData.propTypes = interFace;

export default CommonFetchData;
