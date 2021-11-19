class TodoNotification {
  checkNotificationPromise() {
    try {
      Notification.requestPermission().then();
    } catch (e) {
      return false;
    }

    return true;
  }

  askNotificationPermission() {
    // function to actually ask the permissions
    function handlePermission(permission) {
      // set the button to shown or hidden, depending on what the user answers
      if (
        Notification.permission === "denied" ||
        Notification.permission === "default"
      ) {
        console.log("permission denied or default");
      } else {
        console.log("permission granted");
      }
    }

    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      console.log("This browser does not support notifications.");
    } else {
      if (this.checkNotificationPromise()) {
        Notification.requestPermission().then((permission) => {
          handlePermission(permission);
        });
      } else {
        Notification.requestPermission(function (permission) {
          handlePermission(permission);
        });
      }
    }
  }

  close() {
    var img = "/to-do-notifications/img/icon-128.png";
    var text = "HEY! Your task is now overdue.";
    var notification = new Notification("To do list", {
      body: text,
      icon: img,
    });

    var n = new Notification("My Great Song");
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "visible") {
        // The tab has become visible so clear the now-stale Notification.
        n.close();
      }
    });
  }
}

export default TodoNotification;
