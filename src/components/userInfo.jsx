import Moment from 'react-moment';
import EditableFeild from './editableInput';

function UserInfo(props) {
    return (
        <div className="userInfo">
            <div className="nameRow">
                <div className="icon"><img className='img' src={props.item.picture.large} alt='icon'></img></div>
                <div className="name">
                    <h2>{props.item.name.title + " " + props.item.name.first + " " + props.item.name.last}</h2>
                    <a href="">Update your personal details</a>
                </div>
            </div>
            <EditableFeild title={"Username"} name={props.item.login.username} />
            
            <EditableFeild title={"Gender"} name={props.item.gender.charAt(0).toUpperCase()+ props.item.gender.slice(1)} />
            <div className="rows">
                <div className="title">Date of Birth</div>
                <div className="data">
                    <Moment format="D MMM YYYY">
                        {props.item.dob.date}
                    </Moment>
                </div>
                <button className='button'>Save</button>
            </div>
            <EditableFeild title={"Phone Number"} name={props.item.phone} />
            <EditableFeild title={"Address"} name={props.item.location.city + ", " + props.item.location.state + ", " + props.item.location.country + ", " + props.item.location.postcode} />
            <EditableFeild title={"Email"} name={props.item.email} />


            {console.log(props.item)}
        </div>
    );
}

export default UserInfo;
