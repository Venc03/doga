import "./App.css";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';



const Layout = () => {
    return (
        <div>
            <header><h1 class="hname">Kizöldítjük a földet!</h1></header>
            <article>
                <div class="dropdowns">
                <Dropdown as={ButtonGroup}>
                  <Button variant="success">Split Button</Button>

                  <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                </div>

                <div>
                    <table>                    
                        <tr>
                            <td>
                                Osztály
                            </td>
                            <td>
                                Tevékenység
                            </td>
                            <td>
                                Pont
                            </td>
                            <td>
                                Státusz
                            </td>
                        </tr>
                        <tr>
                            <td>
                                
                            </td>
                            <td>
                                
                            </td>
                            <td>
                                
                            </td>
                            <td>
                                
                            </td>
                        </tr>
                        <tr>
                            <td>
                                
                            </td>
                            <td>
                                
                            </td>
                            <td>
                                
                            </td>
                            <td>
                                
                            </td>
                        </tr>
                    </table>
                </div>
            </article>
            <footer>
                <a class="footer">Előre is köszönöm az 1est</a>
            </footer>
        </div>
    );
};

export default Layout;