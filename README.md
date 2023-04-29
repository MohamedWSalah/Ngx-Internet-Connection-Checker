Ngx-Internet-Connection-Checker is an Angular library that provides a simple way to check the user's internet connection status in an Angular application.

<p align="center">
  <h1 align="center">NgxInternetConnectionChecker</h1>
</p>

## Preview

<img src="https://github.com/MohamedWSalah/Ngx-Internet-Connection-Checker/tree/master/src/assets/preview.png" alt="preview"/>

## Installation

`ngx-Internet-Connection-Checker` is available via [npm](https://github.com/)

To install NgxInternetConnectionChecker using `npm`, run the following command:

```bash
$ npm install ngx-Internet-Connection-Checker
```

## Usage

### importing the module

To use NgxInternetConnectionChecker in your Angular application, import the `NgxInternetConnectionCheckerModule` into your module file:

```typescript
import { NgModule } from "@angular/core";
import { NgxInternetConnectionCheckerModule } from "ngx-internet-connection-checker";

@NgModule({
  imports: [
    // Other module imports
    NgxInternetConnectionCheckerModule,
  ],
  // Other declarations, providers, etc.
})
export class AppModule {}
```

## Using the component

Once the module is imported, you can use the `ngx-internet-connection-checker` component in your templates:

```html
<ngx-internet-connection-checker></ngx-internet-connection-checker>
```

## Documentation

`ngx-internet-connection-checker` could have the following inputs:
| Name | Type | Default | Description |
|------------ |--------------- |--------- |------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| offlineText | `string` | `Internet Connection Lost` | toggle dark mode |
| onlineText | `string` | `Internet Connection Restored` | destroy when notification component unmount |
| offlineColor | `string` | `#f44336` | duration of the notification when it appear on screen before hiding back |
| onlineColor | `string` | `#4caf50` | derived from <code>eventsCallback</code>, callback function triggered when refresh is clicked during offline status |

## License

Ngx-Internet-Connection-Checker is released under the MIT license.
