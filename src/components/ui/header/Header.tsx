"use client";

import Nav from "./Nav";
import AnnouncementBar from "./AnnouncentBar";

const Header = () => {
    return (
        <header className="w-full">
            <AnnouncementBar />
            <Nav />
        </header>
    );
};

export default Header;
