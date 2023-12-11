import styled from "styled-components";

const Wrapper = styled.div`

.exportButton{
    background-color: ${({ darkcolor }) => darkcolor.Blue};
    display: inline-block;
    padding: 5px;
    border-radius: 10px;
    margin-top: -10px;
    z-index: 100;
    position: absolute;
    top: 20;
}


.border{
    border-left: 1px solid ${({ darkcolor }) => darkcolor.white};
    height: 10px;
    margin-right: 20px;
    padding: 10px;
}

.editableTD {
    
}


.exportButton:hover{
   color: ${({ darkcolor }) => darkcolor.primary}
}

a{
    text-decoration: none;
    color: ${({ darkcolor }) => darkcolor.white};
    font-weight: 300;
    
}

link{
   text-decoration: none !important;
    
}

table{
    width: 100%;  
    padding: 0 1rem;
    border-collapse: separate !important;
    margin-bottom: 20px;
    margin-top: 10px;
}

thead{  
    background-color: ${({ darkcolor }) => darkcolor.Blue};
}



tr{
    height: 3rem;
}
 
td{
    font-weight: 500;
    font-size: 13px;
    text-align: start;
    padding: 1rem;
    word-wrap: break-word;
}

input{
    height: 1rem;
    width: 1rem;
}

tbody{
    background-color: ${({ darkcolor }) => darkcolor.BlueSecondry};
    height: 300px;
    width: 100%;
    overflow-y: scroll ;
    display: block;
    
}

thead tr:first-child td:first-child { border-top-left-radius: 10px; }
thead tr:first-child td:last-child { border-top-right-radius: 10px; }

tfoot tr:last-child td:first-child { border-bottom-left-radius: 10px; }
tfoot tr:last-child td:last-child { border-bottom-right-radius: 10px; }


thead, tbody tr{
    display: table;
    width: 100%;
    table-layout: fixed;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

thead {
    width: calc( 100% - 1em )/* scrollbar is average 1em/16px width, remove it from thead width */
}


tbody tr td{
    border-bottom: 1px solid ${({ darkcolor }) => darkcolor.Gray};
}


tfoot{
    background-color: ${({ darkcolor }) => darkcolor.Blue};
}




@media (max-width: 768px) {

    

    table{
    width: 100vh;  
    padding: 0 1rem;
    border-collapse: separate !important;
    margin-bottom: 20px;
    margin-top: 10px;
}
}


`

export default Wrapper;