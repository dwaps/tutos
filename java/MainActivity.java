package fr.dwaps.tutos;

import android.app.AlertDialog;
import android.content.DialogInterface;
import android.graphics.Color;
import android.support.annotation.ColorLong;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.text.Html;
import android.view.ContextMenu;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.MenuItem;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import android.widget.Toast;

import java.util.Locale;

public class MainActivity extends AppCompatActivity {
    private static int[] COLORS = { Color.RED, Color.GREEN, Color.BLUE };

    private View mContainerRL;
    private TextView mMessageTV;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mContainerRL = findViewById(R.id.activity_main_container_rl);
        mMessageTV = findViewById(R.id.activity_main_message_tv);

        registerForContextMenu(mContainerRL);
    }

    @Override
    public void onCreateContextMenu(ContextMenu menu, View v, ContextMenu.ContextMenuInfo menuInfo) {
        super.onCreateContextMenu(menu, v, menuInfo);

        menu.setHeaderTitle("Choisi une couleur");
        menu.add(0, 0, 0, R.string.color_red);
        menu.add(0, 1, 0, R.string.color_green);
        menu.add(0, 2, 0, R.string.color_blue);
    }

    @Override
    public boolean onContextItemSelected(MenuItem item) {
        String yourColorChoice = getResources().getString(R.string.your_choice);

        mContainerRL.setBackgroundColor(COLORS[item.getItemId()]);
        mMessageTV.setText(String.format(Locale.FRANCE, yourColorChoice, item.getTitle()));
        mMessageTV.setTextColor(Color.WHITE);

        return super.onContextItemSelected(item);
    }
}
