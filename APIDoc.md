# API Documentation
Research on APIs used to finc doctors' information.
### Vital Signs API (ProPublica)
https://www.propublica.org/datastore/api/vital-signs-api 

Status: Requested a free api key to test (might take a few days to get the key).

Looking from the documentation, it seems like the API is using doctor's National Provider Identifier (NPI) as the only parameter for the API request. However, a tool that is built on top of the API seems to be able to search doctors' info by name (https://projects.propublica.org/api-docs/vital-signs/api/). Will probably have to wait for the api key and test it out. The info given by the API seems to be sufficient enough, but how can we get an NPI key from doctor's name by this API is still unclear. However, `NPPES Read API` might be able to help us get the NPI for a doctor.

### NPPES Read API Vesion 2.0 (NPPES NPI Registry)
https://npiregistry.cms.hhs.gov/registry/help-api

Search NPI Records from a given query. 

#### Request Parameters:
* **NPI Number**: Enter the NPI Number to search for a specific NPI. When entered, no other search criteria is needed.
    
* **NPI Type**: The search can be refined to search for only Individual (Type 1) NPIs or only Organization (Type 2) NPIs; or the search can include all NPIs (both Individual and Organization) by selecting Any. Select the desired value from the drop-down list. The NPI Type cannot be the only search criterion entered. Searching by NPI Type and Country is acceptable as long as the Country selected is not United States. When searching by NPI Type and the Country United States, at least one other search criterion field besides State must be entered.

* **Taxonomy Description**: Search for providers by their taxonomy by entering the taxonomy description.

* **Organization Name**: This field only applies to Organizational Providers. This field allows the following special characters: ampersand, apostrophe, colon, comma, forward slash, hyphen, left and right parentheses, period, pound sign, quotation mark, and semi-colon. NPPES searches both the Organization Name and Other Organization Names associated with the NPI, such as the Doing Business As or Former Legal Business Name; therefore, results displayed on the NPI Registry Search Results page might contain an organization name different from the one entered in the Organization Name search criterion.

* **First Name**: This field only applies to Individual Providers. This field allows the following special characters: ampersand, apostrophe, colon, comma, forward slash, hyphen, left and right parentheses, period, pound sign, quotation mark, and semi-colon.

* **Last Name**: This field only applies to Individual Providers. This field allows the following special characters: ampersand, apostrophe, colon, comma, forward slash, hyphen, left and right parentheses, period, pound sign, quotation mark, and semi-colon.

* **City**: The City associated with the provider's practice location address. To search for a Military Address enter either APO or FPO into the City field. This field allows the following special characters: ampersand, apostrophe, colon, comma, forward slash, hyphen, left and right parentheses, period, pound sign, quotation mark, and semi-colon.

* **State**: The State associated with the provider's practice location address. This field cannot be used as the only search criterion. If this field is used, at least one other field, besides the NPI type and Country, must be populated. Select the desired state from the drop down list.

* **Country**: The Country associated with the provider's practice location address. This field can be used as the only search criterion as long as the value selected is neither United States nor Any. When selecting United States as a search criterion, at least one other search criterion field besides the NPI Type and State must be entered. Select the desired Country from the drop down list.

* **Postal Code**: The Postal Code associated with the provider's practice location address.

* **Address Type**: Primary and Secondary Address associated with the provider's practice location address. Must be used with City, State, Country, and/or Postal Code.

* **Exact Match**: By selecting (checking) the check box, the search will only return the NPIs where the NPI data exactly matches the search criteria entered.
  
#### Result:

* **addresses**
