import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container">
        <div class="row g-4 text-start align-items-start">
          <div class="col-md-4">
            <h5>Shubham Computers</h5>
            <p class="mb-0">
              Computer sales, service, CCTV, Tally, BizAnalyst, printer and antivirus support
              in Ahmedabad.
            </p>
          </div>
          <div class="col-md-4">
            <h6>Contact</h6>
            <p class="mb-1"><a href="tel:+919824817431">9824817431</a></p>
            <p class="mb-1">
              <a href="mailto:shubham_computers2005@yahoo.com">
                shubham_computers2005@yahoo.com
              </a>
            </p>
            <p class="mb-0">34, Shilpa Society, D-Cabin, Sabarmati, Ahmedabad</p>
          </div>
          <div class="col-md-4">
            <h6>Working Focus</h6>
            <p class="mb-0">
              Fast diagnosis, genuine products, practical guidance and dependable after-sales
              support.
            </p>
          </div>
        </div>
        <hr />
        <p class="copyright mb-0">
          Copyright {{ year }} Shubham Computers, Ahmedabad. All Rights Reserved.
        </p>
      </div>
    </footer>
  `,
  styles: [
    `
      .footer {
        background: #0d47a1;
        bottom: 0;
        color: white;
        padding: 2.5rem 0 1.25rem;
        position: relative;
        width: 100%;
      }

      h5,
      h6 {
        font-weight: 700;
        margin-bottom: 0.75rem;
      }

      p {
        color: #e3f2fd;
        font-size: 0.95rem;
      }

      a {
        color: #fff3cd;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }

      hr {
        border-color: rgba(255, 255, 255, 0.25);
        margin: 1.5rem 0 1rem;
      }

      .copyright {
        font-size: 0.9rem;
        text-align: center;
      }
    `,
  ],
})
export class Footer {
  year = new Date().getFullYear();
}
