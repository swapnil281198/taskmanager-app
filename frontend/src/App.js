*mport React,{useState,useEffect} f*om "react";
import axios from "axi*s";

function App(){

 *const*[tasks,setTasks* = useState([]);
* const*[title,set*itle] = useState("");
  const*[description,setDescription] = use*tate("");

  const API = process.e*v.REACT_APP_API;

  useEffect(()=>*
      loadTasks();
  },[]);

  co*st loadTasks = async()=>{
      co*st res = await axios.get(`${API}/a*i/tasks`);
      setTasks(res.data*;
  };

  const addTask = async()=*{

      await axios.post(`${API}/*pi/tasks`,{
         title,
      *  description
      });

      set*itle("");
      setDescription("")*

      loadTasks();
  };

  const*deleteTask = async(id)=>{

      a*ait axios.delete(`${API}/api/tasks*${id}`);

      loadTasks();
  };
*  return(
   <div style={{padding:*30px"}}>

     <h1>DevOps Task Man*ger</h1>

     <input
       place*older="Task Title"
       value={t*tle}
       onChange={(e)=>setTitl*(e.target.value)}
     />

     <b* /><br />

     <input
       plac*holder="Description"
       value=*description}
       onChange={(e)=*setDescription(e.target.value)}
  *  />

     <br /><br />

     <but*on onClick={addTask}>
        Add *ask
     </button>

     <hr />

 *   {
       tasks.map((task)=>(
  *     <div key={task._id}>
        *  <h3>{task.title}</h3>
          *<p>{task.description}</p>

       *   <button
             onClick={(*=>deleteTask(task._id)}
          *>
             Delete
           <*button>

           <hr />
       *</div>
       ))
     }

   </div>*  );
}

export default App;
