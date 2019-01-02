package fr.dwaps.tutos;

import android.graphics.Color;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.RelativeLayout;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    private TextView mTitleTV;
    private RelativeLayout mContainerRL;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mTitleTV = findViewById(R.id.activity_main_title_tv);
        mContainerRL = findViewById(R.id.activity_main_container_rl);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        int color = 0;
        String text = "";

        switch (item.getItemId()) {
            case R.id.home:
                color = Color.GREEN;
                text = getResources().getString(R.string.home_str);
                break;
            case R.id.about:
                color = Color.MAGENTA;
                text = getResources().getString(R.string.about_str);
                break;
            case R.id.contact:
                color = Color.CYAN;
                text = getResources().getString(R.string.contact_str);
                break;
        }

        if (color != 0 && !text.isEmpty()) {
            mContainerRL.setBackgroundColor(color);
            mTitleTV.setText(text);
        }

        return super.onOptionsItemSelected(item);
    }
}
