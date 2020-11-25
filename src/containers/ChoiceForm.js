import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Route, Switch, useHistory } from 'react-router-dom';
import ContractorsForm from '../components/ContractorsForm/ContractorsForm';
import ServicesForm from '../components/ServicesForm/ServicesForm';
// Components
import DependencySelector from '../components/ChoiceForm/DependencySelector';
import ServicesFaults from '../components/ChoiceForm/ServicesFaults';
import PlazoTarifa from '../components/ChoiceForm/PlazoTarifa';
import RegulationsForm from '../components/RegulationsForm/RegulationsForm';

const ChoicesForm = () => {
  const [answers, setAnswers] = useState({});
  const { push } = useHistory();

  const onNextDependencySelector = (data) => {
    setAnswers((previousAnswers) => ({ ...previousAnswers, ...data }));
    push('/'); // Change this by the route of the next set of questions
  };

  // eslint-disable-next-line no-console
  console.log(answers);

  return (
    <Container className="d-flex grow-1">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        className="centered-box-container grow-1"
      >
        <Card className="w100" variant="outlined">
          <CardContent>
            <Switch>
              <Route
                path="/preguntas/dependencia"
                render={(props) => (
                  <DependencySelector
                    {...props}
                    onNext={onNextDependencySelector}
                  />
                )}
              />
              <Route
                path="/preguntas/contratistas"
                render={() => <ContractorsForm />}
              />

              <Route
                path="/preguntas/servicios"
                render={() => <ServicesForm />}
              />
              <Route
                path="/preguntas/otras"
                render={() => <RegulationsForm />}
              />
              <Route
                path="/preguntas/serviciosyfaltas"
                component={ServicesFaults}
              />
              <Route path="/preguntas/plazoytarifas" component={PlazoTarifa} />
            </Switch>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default ChoicesForm;