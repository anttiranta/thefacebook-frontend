// Imports
import React from 'react'

const InfoForm = () => {

  // TODO!

  return (
    <div id="information_box">
      <div style={{ backgroundColor: '#4C70A0', color: 'white' }}>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <tbody>
            <tr>
              <td>Information</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <table>
        <tbody>
          <tr><th colSpan='2'>Account Info:</th></tr>
          <tr>
            <td>Name:</td>
            <td>{/* name */}</td>
          </tr>
          <tr>
            <td>Member Since:</td>
            <td>{/* member_since */}</td>
          </tr>
        </tbody>
      </table>

      <form action="">
        <table>
          <tbody>
            <tr><th colSpan='2'>Basic Info:</th></tr>
            <tr>
              <td>Email:</td>
              <td>{/* email */}</td>
            </tr>
            <tr>
              <td>Status:</td>
              <td>
                <select name="status">
                  <option value="">{/* status */}</option>
                  <option value="Student">Student </option>
                  <option value="Alumnus">Alumnus/Alumna</option>
                  <option value="Faculty">Faculty</option>
                  <option value="Staff">Staff</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Sex:</td>
              <td>
                <select name="sex">
                  <option value="">{/* sex */}</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Couple">Couple</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Year:</td>
              <td>
                <select name="year">
                  <option value="">{/* year */}</option>
                  <option value="2016">2016</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="2001">2001</option>
                  <option value="2000">2000</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Concentration:</td>
              <td><input type="text" name="concentration" /></td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr><th colSpan='2'>Extended Info:</th></tr>
            <tr>
              <td>Screenname:</td>
              <td><input type="text" name="screenname" /></td>
            </tr>
            <tr>
              <td>Looking For:</td>
              <td><input type="text" name="looking_for" /></td>
            </tr>
            <tr>
              <td>Interested In:</td>
              <td>
                <select name="interested_in">
                  <option value=""></option>
                  <option value="Women">Women</option>
                  <option value="Men">Men</option>
                  <option value="Couple">Couple</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Relationship Status:</td>
              <td>
                <select name="relationship">
                  <option value="">{/* email */}</option>
                  <option value="Single">Single</option>
                  <option value="In a relationship">In a Relationship</option>
                  <option value="Married">Married</option>
                  <option value="It's Complicated">It's Complicated</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Political Views:</td>
              <td>
                <select name="political_view">
                  <option value="">{/* email */}</option>
                  <option value="Liberal">Liberal</option>
                  <option value="Conservative">Conservative</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Libertarian">Libertarian</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Interests:</td>
              <td><input type="text" name="interests" /></td>
            </tr>
          </tbody>
        </table>
        <div id="fb_button" style={{ textAlign: 'center' }}> <input type="submit" name="submit" value="Update Profile" /></div>
      </form>
    </div>
  )
}

export default InfoForm;