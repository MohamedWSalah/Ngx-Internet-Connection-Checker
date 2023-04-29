Ngx-Internet-Connection-Checker is an Angular library that provides a simple way to check the user's internet connection status in an Angular application.

<p align="center">
  <h1 align="center">NgxInternetConnectionChecker</h1>
</p>

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

By default, the displayed text will be :
`Internet Connection Lost` for offline connection.
`Internet Connection Restored` for restored connection.

You can pass the text you want to be displayed in both cases of offline and restoring connection as follows:

```html
<ngx-internet-connection-checker [onlineText]="'Your connection was restored'" [offlineText]="'You are offline'"></ngx-internet-connection-checker>
```
