import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from '../components/ContactList/ContactList';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { SearchBox } from '../components/SearchBox/SearchBox';
import { fetchContacts } from '../redux/contacts/operations';
import { selectLoading } from '../redux/contacts/selectors';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading)

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
        <Helmet>
        <title>Phonebook</title>    
        </Helmet>
        <ContactForm />
        <SearchBox />
        <div>{isLoading && <b>Request in progress...</b>}</div>
        <ContactList />
    </>
  );
}
