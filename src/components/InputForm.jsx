import React, { useState } from 'react';
import './InputForm.css'; // Import the CSS file

const InputForm = () => {
  const [formData, setFormData] = useState({
    ipNetmask: '',
    ipRange: '',
    fqdn: '',
    ipWildcardMask: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data:', formData);
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="ipNetmask">IP Netmask</label>
        <input
          type="text"
          id="ipNetmask"
          name="ipNetmask"
          value={formData.ipNetmask}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="ipRange">IP Range</label>
        <input
          type="text"
          id="ipRange"
          name="ipRange"
          value={formData.ipRange}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="fqdn">FQDN</label>
        <input
          type="text"
          id="fqdn"
          name="fqdn"
          value={formData.fqdn}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="ipWildcardMask">IP Wildcard Mask</label>
        <input
          type="text"
          id="ipWildcardMask"
          name="ipWildcardMask"
          value={formData.ipWildcardMask}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;
