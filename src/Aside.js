import React, { Component } from 'react';
import image from '../src/hooper.jpg';

class Aside extends Component {
    render() {
      return (
        <aside class="sumary">
        <table class="sumary-table">
            <thead>
                <tr>
                    <th colspan="2">Grace Murray Hopper</th>
                </tr>
            </thead>
                <tbody>
                    <tr>
                        <td  colspan="2">
                        <img src={image} alt="Grace hooper"/>
                        <p>Rear Admiral Grace M. Hopper, 1984</p>
     
                        </td>
                    </tr>
                </tbody>
            
        </table>
    </aside>
      );
    }
  }
  
  export default Aside;