package fr.dwaps.tutos;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.DatePicker;
import android.widget.TextView;

import java.time.LocalDate;
import java.time.format.TextStyle;
import java.util.Locale;

public class MainActivity extends AppCompatActivity implements DatePicker.OnDateChangedListener {

    private TextView mTitleTV;
    private DatePicker mCalendarDP;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mTitleTV = findViewById(R.id.activity_main_title_tv);
        mCalendarDP = findViewById(R.id.activity_main_calendar_dp);

        LocalDate now = LocalDate.now();
        mCalendarDP.init(
            now.getYear(),
            now.getMonth().getValue(),
            now.getDayOfMonth(),
            this
        );
    }

    @Override
    public void onDateChanged(DatePicker view, int year, int monthOfYear, int dayOfMonth) {
        LocalDate date = LocalDate.of(year, monthOfYear+1, dayOfMonth);
        String month = date.getMonth().getDisplayName(TextStyle.FULL, Locale.FRANCE);

        mTitleTV.setVisibility(View.VISIBLE);
        mTitleTV.setText(
            String.format(Locale.FRANCE, "Date du rdv : %d %s %d", dayOfMonth, month, year)
        );
    }
}
