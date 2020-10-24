import React,{useEffect} from 'react';

const Nav = ({username}) => {

    useEffect(() => {
        console.log('component did mount !');

        return() => 
        {
        console.log('component will unmount !');
        };
    },[]);
 
    return (
        <div>
                <div className="alert alert-success" role="alert">
                    hey {username} you just called the Nav component ta-daaaaaaaa !
                </div>

        </div>
    )
}

export default Nav
