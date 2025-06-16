import Section from "./components/Section/Section";
import Container from "./components/Container/Container";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
  return (
    <Section>
      <Container>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </Container>
    </Section>
  );
};

export default App;
