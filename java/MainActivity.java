package fr.dwaps.tutos;

import android.app.AlertDialog;
import android.content.DialogInterface;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.text.Html;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    private boolean touchOnce = true;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    @Override
    public boolean onTouchEvent(MotionEvent event) {
        if (touchOnce) {
            touchOnce = false;
            showAlertDialog(null);
        }
        return super.onTouchEvent(event);
    }

    private void showAlertDialog(String message) {
        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setCancelable(false);

        if (message == null) {
            builder.setMessage(Html.fromHtml(getString(R.string.alertdialog_message)));

            builder.setNegativeButton("Tais-toi !", new DialogInterface.OnClickListener() {
                @Override
                public void onClick(DialogInterface dialog, int which) {
                    dialog.dismiss();
                    touchOnce = true;
                }
            });

            builder.setPositiveButton("Oui tu es gentille", new DialogInterface.OnClickListener() {
                @Override
                public void onClick(DialogInterface dialog, int which) {
                    showAlertDialog(getString(R.string.alertdialog_thanks));
                }
            });
        }
        else {
            builder.setCancelable(true);
            builder.setMessage(message);

            builder.setOnDismissListener(new DialogInterface.OnDismissListener() {
                @Override
                public void onDismiss(DialogInterface dialog) {
                    touchOnce = true;
                }
            });
        }

        builder.create().show();
    }
}
