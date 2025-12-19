import { ErrorLayout } from "../components/layout/ErrorLayout";

export const NotFound = () => {
    return (
        <ErrorLayout
            code="404"
            title="PAGE NOT FOUND"
            description="The coordinates you are attempting to access do not exist within our architectural plans. The page may have been moved or demolished."
            techDetails="NULL_POINTER_EXCEPTION // SECTOR_VOID"
        />
    )
}