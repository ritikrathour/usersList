import { Link } from "react-router-dom";

const User = ({ data }) => {
    const { username, email,phone,website,company} = data;
    return (
        <>
            <div className="card">
                <div className="img_box">
                    <img src={`https://i.pravatar.cc/150?u=${email}` || "download.jfif"} alt="" />
                </div>
                <div className="title">
                    <div className="sub_title">
                        <h4>{username}</h4>
                        <p>{email.slice(0,10)}</p>
                    </div>
                    <div className="sub_title">
                    <p className="company">{company?.name.slice(0,8)}</p>
                    <p className="number">{phone.slice(0,10)}</p>
                    </div>
                </div>
                <Link className="website"  href={website}>{website}</Link>
                <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae deserunt aliquam ducimus est quisquam, repellat consectetur nesciunt at expedita rem provident iste fugiat alias, praesentium magni, explicabo excepturi ea voluptate!</p>
            </div>
        </>
    )
}
export default User;