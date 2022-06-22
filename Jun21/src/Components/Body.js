import React from "react";
import './Body.css';

function Body(){
    return (
        <>
    <p>This is a paragraph This is a paragraph This is a paragraph This is a paragraph This is a paragraph</p>
    <div class="row">
    <div class="col-12">
		<table class="table table-image">
		  <thead>
		    <tr>
              <th>Number</th>
		      <th scope="col">Image</th>
		      <th scope="col">Check box</th>
		      <th scope="col">Language</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr>
		      <th scope="row">1</th>
		      <td class="w-25">
			  <img src="./logo192.png" />
		      </td>
		      <td><input type='checkBox' /></td>
		      <td>HTML</td>
		    </tr>
            <tr>
		      <th scope="row">2</th>
		      <td class="w-25">
			  <img src="./logo192.png" />
		      </td>
		      <td><input type='checkBox' /></td>
		      <td>CSS</td>
		    </tr>
            <tr>
		      <th scope="row">3</th>
		      <td class="w-25">
			  <img src="./logo192.png" />
		      </td>
		      <td><input type='checkBox' /></td>
		      <td>PHP</td>
		    </tr>
		  </tbody>
		</table>   
    </div>
  </div>
    </>
    )
}
export default Body