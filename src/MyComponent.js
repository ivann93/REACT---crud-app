import React, {Component } from 'react';
import './index.css';

class MyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false
    };

    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  onDelete() {
    const { onDelete, name } = this.props;

    onDelete(name)
  }

  onEdit() {
    this.setState({ isEdit: true});
  }

  onEditSubmit(event) {
    event.preventDefault();

    this.props.onEditSubmit(this.nameInput.value, this.priceInput.value, this.props.name);

    this.setState({ isEdit: false });
  }

  render() {
    const { name, price } = this.props;

    return (
        <div>
          {
            this.state.isEdit
              ? (
                <form onSubmit={this.onEditSubmit}>
                  <input placeholder="Name" ref={nameInput => this.nameInput = nameInput} defaultValue={name}/>
                  <input placeholder="Price" ref={priceInput => this.priceInput = priceInput} defaultValue={price}/>
                  <button>Save</button>
                </form>
              )
              : (
                <div className="tabela">
                <table align="center">
                  <tbody>
                    <tr>
                      <th>Product</th>
                      <th>Price</th> 
                      <th>Actions</th>
                    </tr>
                    <tr>
                      <td>{name}</td>
                      <td>{price}</td>
                      <td><button onClick={this.onEdit}>Edit</button></td>
                      <td><button onClick={this.onDelete}>Delete</button></td>
                    </tr>
                  </tbody>
                </table>


                </div>
              ) 
          }
          
        </div>
    );
  }
}

export default MyComponent;
