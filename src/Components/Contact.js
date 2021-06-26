import React from 'react';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {nom: '', contact : '', comment:''};
    
        this.handleNom = this.handleNom.bind(this);
        this.handleContact = this.handleContact.bind(this);
        this.handleComment = this.handleComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleNom(event) {
        this.setState({nom: event.target.value});
      }

      handleContact(event) {
        this.setState({contact: event.target.value});
      }

      handleComment(event) {
        this.setState({comment: event.target.value});
      }

    handleSubmit(event) {
        event.preventDefault();
        //const data = new FormData(event.target);
        
        /*
        fetch('/api/form-submit-url', {
          method: 'POST',
          body: data,
        });
        */
       alert('Thank you for your contact ')
      }

    render() {
        return (
        <div className="Contact" id ="contact">
        
            <div className="contact-text">
                <h1>CONTACT</h1>
                <h2>HAVE A QUESTION OR WANT TO WORK TOGETHER?</h2>

            </div>
            <form className="type-input" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Name" value={this.state.value} onChange={this.handleNom} />
                <input type="text" placeholder="Contact" value={this.state.contact} onChange={this.handleContact}/>
                <textarea type="text" placeholder="Your comment" value={this.state.comment} onChange={this.handleComment} />
                <div className="submit-me">
                    <button type ="submit" value="SUBMIT ME">SUBMIT ME</button>
                </div>
            </form>
   
        </div>
        )
    }
}
export default Contact