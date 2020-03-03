// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// App Imports
import { setError, setSuccess } from '../../common/component/notification/actions'
import useInput from '../../../hooks/useInput'
import { update } from '../redux/actions/users'
import { isValidEmail } from '../helper/validation'
import userRoutes from '../../../setup/routes/user'

const InfoForm = (props) => {
  const user = props.user.details

  // Inputs, selects, etc.
  const emailInput = useInput('text', user.email)
  const statusSelect = useInput('select', user.status)
  const sexSelect = useInput('select', user.gender)
  const yearSelect = useInput('select', user.year)
  const concentationInput = useInput('text', user.concentation)
  const lookingForInput = useInput('text', user.lookingFor)
  const interestedInSelect = useInput('select', user.interestedIn)
  const relationshipSelect = useInput('select', user.relationship)
  const politicalViewSelect = useInput('select', user.politicalView)
  const interestsInput = useInput('text', user.interests)
  const phoneInput = useInput('text', user.phone)
  const schoolInput = useInput('text', user.school)

  const validate = () => {
    if (!emailInput.value) {
      throw new Error('You did not fill all of the required fields.')
    }
    if (!isValidEmail(emailInput.value)) {
      throw new Error('Please enter a valid email address.')
    }
    if (yearSelect.value !== "" && isNaN(yearSelect.value)) {
      throw new Error('Please enter a valid year.')
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      validate()

      await props.update({
        'id': user.id,
        'email': emailInput.value,
        'status': statusSelect.value,
        'gender': sexSelect.value,
        'year': yearSelect.value !== "" ? parseInt(yearSelect.value) : 0,
        'concentation': concentationInput.value,
        'lookingFor': lookingForInput.value,
        'interestedIn': interestedInSelect.value,
        'relationship': relationshipSelect.value,
        'politicalView': politicalViewSelect.value,
        'interests': interestsInput.value,
        'phone': phoneInput.value,
        'school': schoolInput.value,
      })

      props.setSuccess('Profile updated!')

      props.history.push(userRoutes.profile.path(user.username))
    } catch (exception) {
      props.setError(exception.message)
    }
  }

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

      {/* Unchangeable Info */}
      <table>
        <tbody>
          <tr><th colSpan='2'>Account Info:</th></tr>
          <tr>
            <td>Name:</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>Screenname:</td>
            <td>{user.username}</td>
          </tr>
          <tr>
            <td>Member Since:</td>
            <td>{user.memberSince ? new Date(parseInt(user.memberSince)).toUTCString() : ''}</td>
          </tr>
        </tbody>
      </table>

      {/* Info Form */}
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr><th colSpan='2'>Basic Info:</th></tr>
            <tr>
              <td>Email: <span style={{ color: 'red' }}>*</span></td>
              <td><input type="text" name="email" {...emailInput} /></td>
            </tr>
            <tr>
              <td>Status:</td>
              <td>
                <select name="status"  {...statusSelect}>
                  <option value="">Please choose</option>
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
                <select name="sex" {...sexSelect}>
                  <option value="">Please choose</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Couple">Couple</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Year:</td>
              <td>
                <select name="year" {...yearSelect}>
                  <option value="">Please choose</option>
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
              <td>
                <input type="text" name="concentation" {...concentationInput} />
              </td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td><input type="text" name="phone" {...phoneInput} /></td>
            </tr>
            <tr>
              <td>School:</td>
              <td><input type="text" name="school" {...schoolInput} /></td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr><th colSpan='2'>Extended Info:</th></tr>
            <tr>
              <td>Looking For:</td>
              <td><input type="text" name="lookingFor" {...lookingForInput} /></td>
            </tr>
            <tr>
              <td>Interested In:</td>
              <td>
                <select name="interestedIn" {...interestedInSelect} >
                  <option value="">Please choose</option>
                  <option value="Women">Women</option>
                  <option value="Men">Men</option>
                  <option value="Couple">Couple</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Relationship Status:</td>
              <td>
                <select name="relationship" {...relationshipSelect} >
                  <option value="">Please choose</option>
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
                <select name="politicalView" {...politicalViewSelect} >
                  <option value="">Please choose</option>
                  <option value="Liberal">Liberal</option>
                  <option value="Conservative">Conservative</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Libertarian">Libertarian</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Interests:</td>
              <td><input type="text" name="interests" {...interestsInput} /></td>
            </tr>
          </tbody>
        </table>
        <div id="fb_button" style={{ textAlign: 'center' }}>
          <input type="submit" name="submit" value="Update Profile" />
        </div>
      </form>
    </div>
  )
}

// Component Properties
InfoForm.propTypes = {
  user: PropTypes.object.isRequired
}

export default withRouter(connect(null, { setError, setSuccess, update })(InfoForm));