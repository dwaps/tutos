package fr.dwaps.tutos;

import android.graphics.Color;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.TextView;
import android.widget.TimePicker;

import java.util.Locale;

public class MainActivity extends AppCompatActivity implements TimePicker.OnTimeChangedListener {

  private TextView mTitleTV;
  private TimePicker mTimerTP;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    mTitleTV = findViewById(R.id.activity_main_title_tv);
    mTimerTP = findViewById(R.id.activity_main_timer_tp);

    mTimerTP.setIs24HourView(true);
    mTimerTP.setOnTimeChangedListener(this);
  }

  @Override
  public void onTimeChanged(TimePicker view, int hourOfDay, int minute) {
    mTitleTV.setVisibility(View.VISIBLE);
    mTitleTV.setText(String.format(Locale.FRANCE, "Réveil réglé à %d:%d", hourOfDay, minute));
  }
}
