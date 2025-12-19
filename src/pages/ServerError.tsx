import { ErrorLayout } from "../components/layout/ErrorLayout";

export const ServerError = () => {
    return (
        <ErrorLayout
            code="500"
            title="Structural Inestability"
            description="Our Digital infrastructure has encountered an unexpected critical failure. Our engineers have been dispatched to reinforce the system."
            techDetails="INTERNAL_SERVER_ERROR // CONNECTION_REFUSED"
            actionLabel="RETRY CONNECTION"
            onAction={() => window.location.reload()}
        />
    )
}