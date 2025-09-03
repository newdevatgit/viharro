import React from "react";
import SearchBar from "../components/searchBar.jsx";

function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4" style={{ backgroundImage: 'url("src/assets/Home_bg.png")', backgroundSize: 'cover' }}>
            <SearchBar />
        </div>
    )
}

export default Home;