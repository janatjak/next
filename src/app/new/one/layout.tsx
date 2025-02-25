import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="flex flex-row w-full">
            <main className="flex-1">
                {/* Start main area*/}
                <div className="m-4 p-2 h-screen rounded-sm border-2 border-dashed">{children}</div>
                {/* End main area */}
            </main>
            <aside className="flex-1">
                {/* Start secondary column (hidden on smaller screens) */}
                <div className="m-4 p-2 h-screen rounded-sm border-2 border-dashed">inner layout</div>
                {/* End secondary column */}
            </aside>
        </div>
    );
};

export default Layout;
