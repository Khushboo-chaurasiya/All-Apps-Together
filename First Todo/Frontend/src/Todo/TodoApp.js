import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './TodoOne.css'

function TodoApp() {
    const [newItem, setNewItem] = useState("");
    const [filterItem, setFilterItem] = useState("");
    const [todos, setTodos] = useState([]);
    const [err, setError] = useState("");
    const [newStatus, setNewStatus] = useState(true);
    const [hideShow, setHideShow] = useState("");
    const [filterFlag, setFilterFlag] = useState(0);

    useEffect(() => {
        let yes = 0;
        const khu = document.querySelector('.tableBody').getElementsByTagName('tr');
        Array.from(khu).forEach(function(khu){
            let todo = khu.getElementsByTagName('td');
            let first = khu.getElementsByTagName('td')[0].innerText;
            let second = khu.getElementsByTagName('td')[1].innerText;
            console.log(first + "****"+second);
            if(first.indexOf(filterItem) !==  -1 || second.indexOf(filterItem) !== -1){
                todo[0].style.display = '';
                todo[1].style.display = '';
                todo[2].style.display = '';
                yes++;
            }
            else{
                todo[0].style.display = 'none';
                todo[1].style.display = 'none';
                todo[2].style.display = 'none';
            }

            if(yes > 0){
                setFilterFlag(1);
            } else{
                setFilterFlag(0);
            }
        })
    }, [filterItem])

    useEffect(() => {
        Axios.get('http://localhost:4000/api/todos')
        .then((res) => {
            setTodos(res.data);
        })
        .catch((err) => {
            setError("Something went wrong, unable to fetch Todo data");
        })
    }, [newStatus])

    const tableBody = () => {
        let arr = [];
        for(let i=0; i<todos.length; i++){
            arr.push(<tr key={todos[i]._id}>
                <td>{i+1}</td>
                <td style={{width:'100%'}}> {todos[i].task} </td>
                <td style={{textAlign:'center'}}><button style={{backgroundColor:'yellow', borderWidth:'inherit'}} name={todos[i]._id} onClick={deleteTodo}>X</button></td>
                </tr>);
        }
        return (arr);
    }

    const addTodo = () => {
        if(newItem.length > 3){
            let obj = {
                task : newItem
            }
            Axios.post('http://localhost:4000/api/todos', obj)
            .then((res) => {
                setNewItem("");
                newStatus ? setNewStatus(false) : setNewStatus(true) ;
                alert("New todo item added successfully!!")
                
            })
            .catch((err) => {
                setError("Something went wrong, unable to fetch Todo data");
            })
        }else{
            alert("Not able to Add todos")
        }
    }

    const deleteTodo = (e) => {
        Axios.delete(`http://localhost:4000/api/todos/${e.currentTarget.name}`)
        .then((res) => {
            newStatus ? setNewStatus(false) : setNewStatus(true) ;
            alert("Todos has been deleted successfully!!");
        })
        .catch((err) => {
            alert("Unable to remove Todo item, Something went wrong!!");
        })
    }

    const deleteAllTodo = () => {
        Axios.delete("http://localhost:4000/api/todos")
        .then((res) => {
            newStatus ? setNewStatus(false) : setNewStatus(true) ;
            alert("All todos has been deleted successfully!!");
        })
        .catch((err) => {
            alert("Unable to remove All Todo item, Something went wrong!!");
        })
    }

    const hideTodo = () => {
        console.log("In progress");
        
        hideShow === "" ? setHideShow("none") : setHideShow("");
    }
    return (
        <div className="wholeDiv">
        <div className="App contain">
            <br/>
                <h1>React To-Do App</h1>
                <h6>Enhance Your productivity</h6>
            <br/>
        </div>

        <div className="tomatoBack">
        <br/>
        <div className="form-group Centered">
            <div className="col-sm-3">
            <input className="form-control textInput" type="text" id="enterWork" placeholder="create new work item" name="enterWork" maxLength="80" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
            </div>
        </div>
            
        <div className="form-group Centered">
            <div className="col-sm-3">
                <button type="button" onClick={addTodo} className="form-control btn btn-primary">Add New Item</button>
            </div>
        </div>

        <div className="form-group Centered">
            <div className="col-sm-3">
            <input className="form-control textInput" type="text" id="filter" placeholder="Filter list" name="filter" value={filterItem} onChange={(e) => setFilterItem(e.target.value)} />
            </div>
        </div>
            
        {
            err === 0 || "0" ? <React.Fragment> 
            <table className="table tableDiv" style={{display: `${hideShow}`}}>
            {
                todos.length > 0 ? 
                filterFlag === 0 && filterItem !== "" ? <h6>Filter does not matched here</h6> : <thead>
                <tr>
                <th>No.</th>
                <th>Task</th>
                <th>(X)</th>
                </tr>
                </thead> :
                <h6>No Records to dispaly</h6>
            }
                <tbody className="tableBody">
                
                {
                    tableBody()
                }
                
                </tbody>
            </table>
            
            <div className="Centered App">
            
            {
                hideShow === "" && <div>
                <button className="btn btn-primary bottomBtn"  onClick={deleteAllTodo}>Clear the List</button>
                &nbsp; &nbsp;
                </div>
            }    

            <div className="Centered">
            <button className="btn btn-primary bottomBtn"  onClick={hideTodo}>{hideShow === "" ? "Hide the List" : "Show the List" }</button>
                </div>
            
            </div>
            
            </React.Fragment> : <h3>Unable to fetch Defects, Something went wrong</h3>
        
        }
    </div>
    </div>
    
        )
}

export default TodoApp
