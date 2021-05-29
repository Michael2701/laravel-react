import React from 'react';
import myapp from '../api/myapp';
import DataTable from 'react-data-table-component';


class Customers extends React.Component{
    title = 'Customers';
    state = { data: [] };
    columns =[
        {name:"Id", selector:"id"}, 
        {name:"Vompany", selector:"company"}, 
        {name:"First Name", selector:"first_name"}, 
        {name:"Last Name", selector:"last_name"},
        {name:"Email Address", selector:"email_address"}, 
        {name:"Address", selector:"address"}, 
        {name:"City", selector:"city"},
        {name:"Country Region", selector:"country_region"}, 
        {name:"Home Phone", selector:"home_phone"}, 
        {name:"Fax Number", selector:"fax_number"},
        {name:"Job Title",selector:"job_title"}, 
        {name:"Mobile Phone", selector:"mobile_phone"}, 
        {name:"Business Phone", selector:"business_phone"}, 
        {name:"State Province",selector:"state_province"}, 
        {name:"Zip Postal Code", selector:"zip_postal_code"},
        {name:"Web Page", selector:"web_page"},
        {name:"Notes", selector:"notes"}, 
        {name:"Attachments", selector:"attachments"} 
    ];

    async getCustomers(){
        const { data } = await myapp.get('customers/get');
        this.setState({ data });
    }

    renderedCustomers(){
        return this.state.customers.map(customer => {
            return <div key={customer.id}>{customer.first_name}</div>;
        });
    }

    componentDidMount(){
        this.getCustomers();
    }

    render() {

        return (
            <div>
                <DataTable
                    title={this.title}
                    columns={this.columns}
                    data={this.state.data}
                />
            </div>
        );
    }
}
 
export default Customers; 