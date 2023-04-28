// // import logo from './logo.svg';
// import './App.css';
// import AudioPlayer from './components/AudioPlayer'
// // eslint-disable-next-line no-unused-vars
// import VideoPlayer from './components/VideoPlayer'
// import QuestionViewerSingleSelect from './components/QuestionViewerSingleSelect'
// import QuestionViewerMultiSelect from './components/QuestionViewerMultiSelect';
// import LessonOne from './pages/1/OneWholeNumbers';
// import Aggregate from './pages/Aggregate/Aggregate';

// import "@aws-amplify/ui-react/styles.css";
// import {
//   withAuthenticator,
// } from "@aws-amplify/ui-react";




// // function App() {
// //   return (
// //     <div className="App">
// //       <LessonOne/>
// //       {/* <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Under Construction

// //         </p>
    
// //       </header> */}
// //       {/* <AudioPlayer
// //       speakerImage='https://gt-final-resources.s3.us-east-1.amazonaws.com/BugBoy.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJGMEQCIFs6z%2B13a2DedPp1SE%2BrpiAphzV%2Fak2xf8Z4vn700xniAiBNZIQtQEciYNuWXgvpSeW3MVHUIsXGyHjKKkr5EN%2FQ6yrtAgiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAIaDDY4OTM0NDE5MzQ4NCIMMrlB2ZHvzmWW5XFOKsEC%2FhRfHWK0h0RaGeznWRcouQ5uqvGeYEJs6z23Wz7XkG54%2FP4XeGAYLWVMd9BzNjayncrLRUTnkuM4icoIW1MOVyFAArFpVZNX8tSiUwN%2FqqM3Akcy0UpAkFcOsXhikgGcQBJtetk8Dy4TnAU2uh1GHfQBjHVtYkJk9zdFRpua8CR5oM7q0lAkgZZzt%2FFqxpmrSQNkWjlzcXTbzDhWHOJGbaRj1i6Nv%2FcFqAxDcEumrZwDxoe34ErATfp9qwIg2lu5dVwBEPc9d2l2feWoLAwDzTPpd7ofoHIn05hNjv3XLPSgBmiYFS1d5i9RBNg5jPudze0%2F4ig0nIQkZoSFrJaE53HFOGmtz5G6N8vjN6iLCZNq1QIILDUGP%2FfEPHRG352iOXEhJGJI5Mmg9y5jT8ogOMP1s6q6iCuoedo7HrGalnthMLCMzqEGOrQC14Khs5eP1Ig75YGvSumbXbzmbJ9tEAGAJF3k2aYIufgpfTcRo8jatoutiEe4AhPVLBuVfKVv2mmJaiVFFqs%2FnVwFSkasPO1wDaqZRUKZLYko4Bva4Z%2FsN98m2Wt7qmHBd2vAvB8mVos9EKS9cbXFeUoWsNHnz6oqFBLVkryXueYz5l8Wp1M0hEsF%2BCQUCGRrGpCdYhajrCLXmNNyWpdvlR8DujeJkuFZqWBfPBTeo8Fok2BaX7kLGLrB92ZUKtMCpiXufmRsJhE4ENFFPGJh0EJoSFU506URDW2Fv6b62SNJ1ENd2mu4y%2FZd%2BBUkYKySkk1JzUCZv7HUdzADetrG8jilyxqcZPd4PQLOu9NZ2TbtoPDQ5wkn%2BgqK%2B2lMFracArbdCtQjeb383DA2XSrbd2lZXdM%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230410T034823Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA2BAA5UPGAWV7PPQC%2F20230410%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=26d4b22bd99993f9af8ecff6a1b8e8ad4eb974afabeeb03d3b36435b7966d7bf'
// //       audioLink='https://gt-tech-ed-fraction.s3.amazonaws.com/e461f867-b369-4098-a1fe-ee8278e02025.mp3'/>
// //       <QuestionViewerSingleSelect
// //       questions={[{q:{'QuestionText': 'Which fraction is bigger than 1/2', 'QID': 'L1Q'}, a:[{'OptionText': '1/4', 'isCorrect': false}, {'OptionText': '2/3', 'isCorrect': true}]}, 
// //                   {q:{'QuestionText': 'Which fraction is bigger than 1/3', 'QID': 'L1Q'}, a:[{'OptionText': '1/8', 'isCorrect': false}, {'OptionText': '3/3', 'isCorrect': true}]}]}
// //       />

// // <QuestionViewerMultiSelect
// //         questions={[{q:{'QuestionText': 'Which fraction is bigger than 1/2', 'QID': 'L1Q', 'CorrectCount': 1}, a:[{'OptionText': '1/4', 'isCorrect': false}, {'OptionText': '2/3', 'isCorrect': true}]}, 
// //         {q:{'QuestionText': 'Which fraction is bigger than 1/3', 'QID': 'L1Q', 'CorrectCount': 2}, a:[{'OptionText': '8/8', 'isCorrect': true}, {'OptionText': '3/3', 'isCorrect': true}]}]}
// //         /> */}


// //       <Aggregate/>
// //     </div>
// //   );
// // }

// // export default App;



// function App({ signOut }) {
//   return (
//     <div className="App">
      import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API, Storage } from "aws-amplify";
import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { listNotes } from "./graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations";


{/* <header className="App-header">
        <p>
          Under Construction

        </p>
    
      </header>
    */}
       {/* <LessonOne/> */}
      {/* <AudioPlayer
      speakerImage='https://gt-final-resources.s3.us-east-1.amazonaws.com/BugBoy.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJGMEQCIFs6z%2B13a2DedPp1SE%2BrpiAphzV%2Fak2xf8Z4vn700xniAiBNZIQtQEciYNuWXgvpSeW3MVHUIsXGyHjKKkr5EN%2FQ6yrtAgiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAIaDDY4OTM0NDE5MzQ4NCIMMrlB2ZHvzmWW5XFOKsEC%2FhRfHWK0h0RaGeznWRcouQ5uqvGeYEJs6z23Wz7XkG54%2FP4XeGAYLWVMd9BzNjayncrLRUTnkuM4icoIW1MOVyFAArFpVZNX8tSiUwN%2FqqM3Akcy0UpAkFcOsXhikgGcQBJtetk8Dy4TnAU2uh1GHfQBjHVtYkJk9zdFRpua8CR5oM7q0lAkgZZzt%2FFqxpmrSQNkWjlzcXTbzDhWHOJGbaRj1i6Nv%2FcFqAxDcEumrZwDxoe34ErATfp9qwIg2lu5dVwBEPc9d2l2feWoLAwDzTPpd7ofoHIn05hNjv3XLPSgBmiYFS1d5i9RBNg5jPudze0%2F4ig0nIQkZoSFrJaE53HFOGmtz5G6N8vjN6iLCZNq1QIILDUGP%2FfEPHRG352iOXEhJGJI5Mmg9y5jT8ogOMP1s6q6iCuoedo7HrGalnthMLCMzqEGOrQC14Khs5eP1Ig75YGvSumbXbzmbJ9tEAGAJF3k2aYIufgpfTcRo8jatoutiEe4AhPVLBuVfKVv2mmJaiVFFqs%2FnVwFSkasPO1wDaqZRUKZLYko4Bva4Z%2FsN98m2Wt7qmHBd2vAvB8mVos9EKS9cbXFeUoWsNHnz6oqFBLVkryXueYz5l8Wp1M0hEsF%2BCQUCGRrGpCdYhajrCLXmNNyWpdvlR8DujeJkuFZqWBfPBTeo8Fok2BaX7kLGLrB92ZUKtMCpiXufmRsJhE4ENFFPGJh0EJoSFU506URDW2Fv6b62SNJ1ENd2mu4y%2FZd%2BBUkYKySkk1JzUCZv7HUdzADetrG8jilyxqcZPd4PQLOu9NZ2TbtoPDQ5wkn%2BgqK%2B2lMFracArbdCtQjeb383DA2XSrbd2lZXdM%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230410T034823Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA2BAA5UPGAWV7PPQC%2F20230410%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=26d4b22bd99993f9af8ecff6a1b8e8ad4eb974afabeeb03d3b36435b7966d7bf'
      audioLink='https://gt-tech-ed-fraction.s3.amazonaws.com/e461f867-b369-4098-a1fe-ee8278e02025.mp3'/>
      <QuestionViewerSingleSelect
      questions={[{q:{'QuestionText': 'Which fraction is bigger than 1/2', 'QID': 'L1Q'}, a:[{'OptionText': '1/4', 'isCorrect': false}, {'OptionText': '2/3', 'isCorrect': true}]}, 
                  {q:{'QuestionText': 'Which fraction is bigger than 1/3', 'QID': 'L1Q'}, a:[{'OptionText': '1/8', 'isCorrect': false}, {'OptionText': '3/3', 'isCorrect': true}]}]}
      /> */}
{/* 
<QuestionViewerMultiSelect
        questions={[{q:{'QuestionText': 'Which fraction is bigger than 1/2', 'QID': 'L1Q', 'CorrectCount': 1}, a:[{'OptionText': '1/4', 'isCorrect': false}, {'OptionText': '2/3', 'isCorrect': true}]}, 
        {q:{'QuestionText': 'Which fraction is bigger than 1/3', 'QID': 'L1Q', 'CorrectCount': 2}, a:[{'OptionText': '8/8', 'isCorrect': true}, {'OptionText': '3/3', 'isCorrect': true}]}]}
        /> */}


      {/* <Aggregate/>
    </div>
  );
}

export default withAuthenticator(App); */}

const App = ({ signOut }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    const notesFromAPI = apiData.data.listNotes.items;
    await Promise.all(
      notesFromAPI.map(async (note) => {
        if (note.image) {
          const url = await Storage.get(note.name);
          note.image = url;
        }
        return note;
      })
    );
    setNotes(notesFromAPI);
  }
  
  

  async function createNote(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const image = form.get("image");
    const data = {
      name: form.get("name"),
      description: form.get("description"),
      image: image.name,
    };
    if (!!data.image) await Storage.put(data.name, image);
    await API.graphql({
      query: createNoteMutation,
      variables: { input: data },
    });
    fetchNotes();
    event.target.reset();
  }

  async function deleteNote({ id, name }) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    await Storage.remove(name);
    await API.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
  }

  return (
    <View className="App">
      <Heading level={1}>My Notes App</Heading>
      <View as="form" margin="3rem 0" onSubmit={createNote}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="name"
            placeholder="Note Name"
            label="Note Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="description"
            placeholder="Note Description"
            label="Note Description"
            labelHidden
            variation="quiet"
            required
          />
          <Button type="submit" variation="primary">
            Create Note
          </Button>
        </Flex>
      </View>
      <View
  name="image"
  as="input"
  type="file"
  style={{ alignSelf: "end" }}
/>
      <Heading level={2}>Current Notes</Heading>
      <View margin="3rem 0">
      {notes.map((note) => (
  <Flex
    key={note.id || note.name}
    direction="row"
    justifyContent="center"
    alignItems="center"
  >
    <Text as="strong" fontWeight={700}>
      {note.name}
    </Text>
    <Text as="span">{note.description}</Text>
    {note.image && (
      <Image
        src={note.image}
        alt={`visual aid for ${notes.name}`}
        style={{ width: 400 }}
      />
    )}
    <Button variation="link" onClick={() => deleteNote(note)}>
      Delete note
    </Button>
  </Flex>
))}
      </View>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);