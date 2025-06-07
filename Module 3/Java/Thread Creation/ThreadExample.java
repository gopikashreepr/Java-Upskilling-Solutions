class MessagePrinter extends Thread {
    private String message;

    public MessagePrinter(String message) {
        this.message = message;
    }

    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(message + " - " + i);
            try {
                Thread.sleep(500);  // Sleep for 500 milliseconds
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

public class ThreadExample {
    public static void main(String[] args) {
        MessagePrinter t1 = new MessagePrinter("Thread 1");
        MessagePrinter t2 = new MessagePrinter("Thread 2");

        t1.start();
        t2.start();
    }
}
