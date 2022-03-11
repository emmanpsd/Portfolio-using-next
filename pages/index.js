import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import Link from 'next/link'
import {db} from '/firebase.js'
import {uid} from 'uid';
import {set, ref} from "firebase/database";
import {useState, useEffect} from "react";


export default function Home() {
    const [name, setName] = useState(""); //tracks state

  const handleNameChange = (e) => {  //catches changes
    setName(e.target.value);
  };
  const [email, setEmail] = useState(""); //tracks state

  const handleEmailChange = (e) => {  //catches changes
    setEmail(e.target.value);
  };
  const [describe, setDescription] = useState(""); //tracks state

  const handleDescribeChange = (e) => {  //catches changes
    setDescription(e.target.value);
  };
  //write
  const writeToDatabase = () => {  //firebase
    const uuid = uid();
    set(ref(db,`/${uuid}` ), {
      name,
      email,
      describe,// not nessesary 
    });
    setName(""); //clears input prompt
    setEmail(""); //clears input prompt
    setDescription(""); //clears input prompt
  };
  
   //Read
    useEffect(() =>{
      
     }, []);
   //update
   //delete

  return (    
    <Container>
   <Nav>
    <div>
        <Left>
        <img src="https://witchbla.de/wp-content/uploads/2019/12/emman4.png"></img>
        </Left>
    </div>
    <Menu>
        <Right>
           <Link href="https://dribbble.com/groovyemman">
          <a target="_blank">Dribbble</a>
           </Link>  
           <Link href="https://www.linkedin.com/in/emmanuel-donelson/" >
          <a target="_blank">LinkedIn</a>
            </Link>
          <Link href="https://opensea.io/emmansamusa" >
          <a target="_blank">OpenSea</a>
            </Link>
        </Right>
    </Menu>
    </Nav>
    <Hero>
    <HeroLeft>
    <h1><strong>Emmanuel Donelson </strong>- <br /> Web Developer </h1>
    <p>I’m a self taught fullstack web developer from Chicago who builds modern web/mobile applications with React.js and websites with WordPress.</p>
    </HeroLeft>
    <HeroRight>
    </HeroRight>
    </Hero>
    <Main>
    <MainLeft>
    
     <Image
     src="https://i.ibb.co/VQVsx7T/E7pn3-Ee-XEAIcl67-1-scaled.jpg" height={2560} width={940}
    />
    </MainLeft>
    <MainRight>
       <Image
     src="https://i.ibb.co/kHYNpyv/0001-min-2-1.jpg" height={1895} width={940}
    />
    </MainRight>
    </Main>
      <Skills>
       <SkillTitle>
        <h1>Skills & Experience</h1>
       </SkillTitle>
       <SkillGrid>
       <div>
       <p>Front-End Development</p>
       <p>Adobe Creative Suite</p>
       <p>Layout</p>
       <p>Node JS</p>
       </div>
       <div>
       <p>Javascript</p>
       <p>React Js</p>
       <p>Next Js</p>
       <p>Solidity</p>
       </div>
       <div>
       <p>MongoDB</p>
       <p>AWS</p>
       <p>Database Management</p>
       <p>SQL</p>
       </div>
       <div>
       <p>Social Media Marketing</p>
       <p>E-commerce Expert</p>
       <p>Wordpress</p>
       <p>Graphic Design</p>
       </div>
       </SkillGrid>
      </Skills>
      
       <Form>
       <FormTitle>
       
       </FormTitle>
       <form action="http://www.acme.com/register" method="POST">
  <label for="name">Name</label><br />
  <input id="name" type="text" autocomplete="name" value={name} onChange={handleNameChange} required /><br />
  <label for="email">Email</label><br />
  <input id="email" type="text" autocomplete="name" value={email} onChange={handleEmailChange} required /><br />
  <label for="describe">Describe your project</label><br />
  <textarea id="describe" type="text" autocomplete="name" value={describe} onChange={handleDescribeChange} required /><br />
  
 
 
  <button onClick={writeToDatabase} type="submit">Submit</button>
</form>
       </Form>
      
    </Container>
   
  )
}

const Left = styled.div`

img {
  padding-top: 20px;
  padding-bottom: 10px;
  height: 80px;
}
  
` 

  ;

const Right = styled.a`
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
  color: #aaaaaa;
a{
padding-top: 20px;
padding-left: 20px;
}
  
`;
const Menu = styled.div`

`;
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2%;
  background-color: black;

`;
const Container = styled.div`
 
`;
const Hero = styled.div`
  background-color: black;
  height: 70vh;
  display: flex;
`;
const HeroLeft = styled.div`
  padding-left: 20px;
  padding-top: 2.5%;
  background-color: black;
  height: 100%;
  width: 50vw;
  color: white;
  h1{
  font-size: 3.8em;
  line-height: 1.3;
  font-weight: 100;
  }
  p{
  font-size: 22px;
  line-height: 1.9;
  }
  strong{
  font-weight: 600;
  }
`;
const HeroRight = styled.div`
  background-image: url('http://49.media.tumblr.com/83529ebfc229cff5fd0793631990492a/tumblr_nlxnqm6J681sh8a83o1_500.gif');
  background-repeat: no-repeat;
  background-size: fit;
  background-position: center;
  height: 100%;
  width: 50vw;
`;
const Main = styled.div`
  background-color: black;
  display: flex;
  padding-top: 60px;
`;
const MainLeft = styled.div`
 background-color: black;
  width: 50vw;

  

`;

const MainRight = styled.div`
 background-color: black;
 width: 50vw;
  
`;
const Skills = styled.div`
  background-color: black;
 padding-left: 20px;
padding-right: 20px
color: white;
 font-size: 18px;


`;
const SkillGrid = styled.div`

 display: flex;
 color: white;
 justify-content: space-between;

padding-right: 20px;
padding-bottom: 45px;

`;
const SkillTitle = styled.div`

 display: flex;
 color: white;
  h1{
font-weight: 100;
  }


`;
const FormTitle = styled.div`
 display: flex;
  padding-left: 20px;
 color: white;
  h1{
font-weight: 100;
  }


`;
const FormContainer = styled.div`

`
const Form = styled.div`
background-color: black;

form{
width: 100%;
padding: 0 20px;
margin: auto;
color: white;

label{

padding-right: 10px;
}
input{
width: 100%;
height: 40px;
margin-bottom: 10px;
margin-top: 5px;
}
textarea{
width: 100%;
height: 160px;
margin-bottom: 10px;
margin-top: 5px;
}
button{
background-color: black;
color: white;
margin-top: 20px;
padding: 13px 80px;
margin-left: 1px;
border: 1px solid white; 
margin-bottom: 45px;

}
}
`
