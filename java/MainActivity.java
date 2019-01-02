package fr.dwaps.tutos;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    private View toastLayout;

    private String mDefaultToastStr;
    private String mCustomToastStr;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mDefaultToastStr = getResources().getString(R.string.default_toast_message);
        mCustomToastStr = getResources().getString(R.string.custom_toast_message);

        toastLayout = getLayoutInflater().inflate(R.layout.toast, (ViewGroup) findViewById(R.id.toast));
    }

    public void showDefaultToast(View view) {
        Toast.makeText(this, mDefaultToastStr, Toast.LENGTH_SHORT).show();
    }

    public void showCustomToast(View view) {
        Toast toast = Toast.makeText(this, mCustomToastStr, Toast.LENGTH_SHORT);
        toast.setGravity(Gravity.CENTER, 0, 0);
        toast.setView(toastLayout);
        toast.show();
    }
}
