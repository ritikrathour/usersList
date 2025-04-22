import { useCallback, useState } from "react";
import Loader from "../../components/Loader";
import User from "../../components/User";
import UseApi from "../../hooks/UseApi";
import "./index.css"
import NoUserFound from "../../components/NoUserFound";
const Home = () => {
    // fetch users from api 
    const [search, setSearch] = useState("");
    const { users, loading, error } = UseApi("https://jsonplaceholder.typicode.com/users"); 
    const filterdUser = users?.filter((user) =>
        user?.name.toLowerCase().includes(search.toLowerCase())
    );
    // handleChangeSearchQuery
    const handleChangeSearchQuery = (e) => {
        setSearch(e.target.value)
    }

    if (error) {
        return <h2 className="error">{error}</h2>
    }
    return (
        <>
            <section className="section home">
                <div className="container">
                    <div className="search_bar">
                        <input type="text" name="search" value={search} onChange={(e) => handleChangeSearchQuery(e)} placeholder="Search User By UserName..." />
                        <i className="fas fa-search" ></i>
                    </div>
                </div>
                <div className="container user_grid">
                    {
                        loading ? <Loader /> :
                            (
                                filterdUser?.length > 0 ?
                                    filterdUser?.map(user => {
                                        return <User data={user} key={user?.id} />
                                    }) :
                                    <NoUserFound query={search} />
                            )
                    }
                </div>
            </section>
        </>
    )
}
export default Home;