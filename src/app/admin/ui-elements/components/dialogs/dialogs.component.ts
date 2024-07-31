import { Component } from '@angular/core';
import Swal, { SweetAlertOptions } from 'sweetalert2';

@Component({
  selector: 'ico-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss'],
})
export class DialogsComponent {
  alertOpt: SweetAlertOptions = {};
  public message =
    '<span style="color: #CC0000">html<span> message.</span></span>';
  constructor() {}

  swalWithHtml() {
    Swal.fire({
      title: '<strong>HTML</strong> Title!',
      html:
        'You can use <b>bold text</b>, ' +
        '<a href="#">links</a> ' +
        'and other HTML tags',
      focusConfirm: false,
      cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
    });
  }

  swalWithImage() {
    Swal.fire({
      title: 'Sweet!',
      text: 'Modal with a custom image.',
      imageUrl: 'assets/images/sm/avatar2.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    });
  }

  // autoCloseTimer(){
  //   let timerInterval
  //   Swal.fire({
  //     title: 'Auto close alert!',
  //     html: 'I will close in <b></b> milliseconds.',
  //     timer: 2000,
  //     timerProgressBar: true,
  //     didOpen: () => {
  //       Swal.showLoading()
  //       timerInterval = setInterval(() => {
  //         const content = Swal.getContent()
  //         if (content) {
  //           const b = content.querySelector('b')
  //           if (b) {
  //             b.textContent = Swal.getTimerLeft()
  //           }
  //         }
  //       }, 100)
  //     },
  //     willClose: () => {
  //       clearInterval(timerInterval)
  //     }
  //   }).then((result) => {
  //     /* Read more about handling dismissals below */
  //     if (result.dismiss === Swal.DismissReason.timer) {
  //       console.log('I was closed by the timer')
  //     }
  //   })
  // }

  confirm() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }

  swalWithAjax() {
    Swal.fire({
      title: 'Submit your Github username',
      // input: 'text',
      // inputAttributes: {
      //   autocapitalize: 'off'
      // },
      showCancelButton: true,
      confirmButtonText: 'Ok',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .catch((error) => {
            Swal.showValidationMessage(`Request failed: ${error}`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '<strong>Ajax request finished!</strong>',
        });
      }
    });
  }

  swalWithInput() {
    Swal.fire({
      title: 'Submit your Github username',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: 'Ok',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {},
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }

  swalWithParam() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          );
        }
      });
  }
}
