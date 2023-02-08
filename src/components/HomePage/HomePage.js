const { Container, Table, Button } = require("react-bootstrap");

const HomePage = () => {
  const tourArr = [
    { date: "JULY 16", city: "DETROIT, MI", venue: "DTE ENERGY MUSIC THEATRE" },
    { date: "JULY 19", city: "TORONTO,ON", venue: "BUDWEISER STAGE" },
    { date: "JULY 22", city: "BRISTOW, VA", venue: "JIGGY LUBE LIVE" },
    { date: "JULY 29", city: "PHOENIX, AZ", venue: "AK-CHIN PAVILION" },
    { date: "AUG 2", city: "LAS VEGAS, NV", venue: "T-MOBILE ARENA" },
    { date: "AUG 7", city: "CONCORD, CA", venue: "CONCORD PAVILION" },
  ];

  const tourArray = tourArr.map((item) => {
    return (
      <tbody >
        <tr>
          <td>{item.date}</td>
          <td>{item.city}</td>
          <td>{item.venue}</td>
          <td>
            <Button>BUY TICKETS</Button>
          </td>
        </tr>
      </tbody>
    );
  });

  return (
    
    <Container>
      <center>
        <h2>TOUR</h2>
      </center>
      <Table>
        <center>
          <tbody>{tourArray}</tbody>
        </center>
      </Table>
    </Container>
  );
};

export default HomePage;
